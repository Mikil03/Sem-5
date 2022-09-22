def encrypt(m,e,n):
    C = (m ** e) % n
    return C

def decrypt(C,d,n):
    M = (C ** d) % n
    return M

def eea(a,b):
    t1 = 0
    t2 = 1

    q = a//b
    r = a%b
    t = t1 - t2*q

    while(r != 0):
        a = b
        b = r
        t1 = t2
        t2 = t

        q = a/b
        r = a%b
        t = t1 - t2*q
    return t2

p = int(input("Enter p value:"))
q = int(input("Enter q value:"))
m = int(input("Enter message m:"))
e = int(input("Enter e value:"))

n = p * q
phi_n = (p-1)*(q-1)

d = eea(phi_n, e)
if(d<0):
    d = phi_n + d
C = encrypt(m, e, n)
M = decrypt(C, d, n)

print("Encrypted message is "+ str(C))
print("Decrypted message is "+ str(M))