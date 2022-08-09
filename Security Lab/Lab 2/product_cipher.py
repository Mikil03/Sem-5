import string

def sub_en(plain,key):
    letters = string.ascii_letters
    dict1 = {}
    for i in range(0,len(letters)):
        dict1[letters[i]]=letters[(i+key)%len(letters)]
    c_cipher = ''
    for i in range(0,len(plain)):
        if(plain[i]==' '):
            c_cipher = c_cipher + ' '
        else:
            if(plain[i] in dict1):
                c_cipher = c_cipher + dict1[plain[i]]
            else:
                c_cipher = c_cipher + plain[i]

    return c_cipher

def sub_den(decrypt_plain1,key):
    letters = string.ascii_letters
    dict2 = {}
    for i in range(0,len(letters)):
        dict2[letters[i]]=letters[(i-key)%len(letters)]
        
    plain = ''
    for i in range(0,len(decrypt_plain1)):
        if(decrypt_plain1[i]==' '):
            plain = plain + ' '
        else:
            if(decrypt_plain1[i] in dict2):
                plain = plain + dict2[decrypt_plain1[i]]
            else:
                plain = plain + decrypt_plain1[i]

    return plain

def trans_en(c_cipher,key):
    row = 0
    col = 0
    array = [['' for i in range(len(c_cipher))]for j in range(key+1)]
    down = False
    i = 0
    for i in range(len(c_cipher)):
        array[row][i] = c_cipher[i]
        if row == key:
            down = False
        if row ==0 or down == True:
            row = row + 1
            down = True

        else:
            down = False
            row = row - 1

    t_cipher = ''
    for i in array:
        for j in i:
            t_cipher = t_cipher + j
    
    return t_cipher


def trans_den(t_cipher,key):
    
    array = [['' for i in range(len(t_cipher))]for j in range(key+1)]
    row = 0
    down = False

    i = 0
    for i in range(len(t_cipher)):
        array[row][i] = '*'
        if row == key:
            down = False
        if row ==0 or down == True:
            row = row + 1
            down = True

        else:
            down = False
            row = row - 1

    col = 0
    n = 0
    for i in range(key+1):
        for j in range(len(t_cipher)):
            if (array[i][j] == '*' and n < len(t_cipher)):
                array[i][j] = t_cipher[n]
                n = n + 1

    plain = ''
    row = 0
    for i in range(len(t_cipher)):
        plain = plain + array[row][i]
        if row == key:
            down = False
        if row ==0 or down == True:
            row = row + 1
            down = True

        else:
            down = False
            row = row - 1
    
    return plain



plain = input('Enter plain text:')
key = int(input('Enter key:'))

print(f"The plain text is '{plain}' and key is {key}.")

print('\n')

c_cipher = sub_en(plain,key)
t_cipher = trans_en(c_cipher, key)

print("Text after substituion cipher: "+c_cipher)
print("Text after transposition cipher: "+t_cipher)

print('\n')

decrypt_plain1 = trans_den(t_cipher, key)
decrypt_plain2 = sub_den(decrypt_plain1, key)

print("Text after deciphering transposition cipher: "+decrypt_plain1)
print("Text after deciphering substituion cipher: "+decrypt_plain2)