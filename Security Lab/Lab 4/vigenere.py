import string

# creating a new key equal to string
def keygenerator(key,plaintext):
    q = len(plaintext)//len(key)
    rem = len(plaintext)%len(key)

    newkey = ""
    newkey = newkey + key*q + key[0:rem]
    return newkey

#Encryption
def encrypt(plaintext,newkey):
    ciphertext = ""
    for i in range(len(plaintext)):
        cipher = ""
        cipher = (letters.index(plaintext[i]) + letters.index(newkey[i]))%26
        ciphertext = ciphertext + letters[cipher]
    return ciphertext

letters = list(string.ascii_lowercase)

# Taking plain text from user and converting to lowercase.
plaintext = input("Enter plain text: ")
plaintext = plaintext.lower()

ptext = ""
# Removing all spaces and punctuation
for i in plaintext:
    if(i in letters):
        ptext = ptext + i

plaintext = ptext
del(ptext)

# Taking key from user.
key = input("Enter key: ")
key = key.lower()

ktext = ""

# Removing all spaces and punctuation
for i in key:
    if(i in letters):
        ktext = ktext + i

key = ktext
del(ktext)
newkey = keygenerator(key,plaintext)
ciphertext = encrypt(plaintext,newkey)
print(ciphertext)