import string

def modify(txt):
    txt = txt.lower()
    txt = txt.replace(" ","")
    txt = txt.replace("j","i")
    return txt

def pair(plain):
    i=0
    plainpair = []
    while i<len(plain):
        if(i==len(plain)-1):
            plainpair.append((plain[i]+"z"))
            i = i + 1
        elif(plain[i]==plain[i+1]):
            plainpair.append((plain[i]+"x"))
            i = i + 1
        else:
            plainpair.append((plain[i]+plain[i+1]))
            i = i + 2
    return plainpair

def matrix(key):
    letters = list(string.ascii_lowercase)
    letters.remove("j")
    unique = []
    for i in key:
        if i not in unique:
            unique.append(i)
            letters.remove(i)
    
    matrix = [["" for i in range(5)] for j in range(5)]

    row = 0
    col = 0
    for i in unique:
        if col == 5:
            row += 1 
            col = 0
        matrix[row][col] = i
        col += 1

    for i in letters:
        if col == 5:
            row += 1 
            col = 0
        matrix[row][col] = i
        col += 1

    return matrix

def find(z,array):
    for i in range(5):
        for j in range(5):
            if(array[i][j]==z):
                return i,j

def encrypt(plainpair,array):
    cipher = ""
    for p in plainpair:
        i,j = find(p[0],array)
        m,n = find(p[1],array)

        if (i==m):
            if j==4:
                j=0
            else:
                j+=1
            if n==4:
                n=0
            else:
                n+=1
            cipher += array[i][j]+array[m][n]
        
        elif (j==n):
            if i==4:
                i=0
            else:
                i+=1
            if m==4:
                m=0
            else:
                m+=1
            cipher += array[i][j]+array[m][n]
        else:
            cipher += array[i][n]+array[m][j]
    return cipher

def dencrypt(cipherpair,array):
    decipher = ""
    for p,q in cipherpair:
        i,j = find(p,array)
        m,n = find(q,array)

        if (i==m):
            if j==0:
                j=4
            else:
                j-=1
            if n==0:
                n=4
            else:
                n-=1
            decipher += array[i][j]+array[m][n]
        
        elif (j==n):
            if i==0:
                i=4
            else:
                i-=1
            if m==0:
                m=4
            else:
                m-=1
            decipher += array[i][j]+array[m][n]
        else:
            decipher += array[i][n]+array[m][j]
    return decipher

plain = input("Enter plain text:")
plain = modify(plain)

key = input("Enter key:")
key = modify(key)

plainpair = pair(plain)

array = matrix(key)

cipher = encrypt(plainpair, array)
print("Encrypted text is :" + cipher)

cipherpair = pair(cipher)
decipher = dencrypt(cipherpair, array)
print("Dencrypted text is :" + decipher)