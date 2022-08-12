import string

def playfair(plain,key):
    # Replace i with j in key and plain text and create a list of unique elements of key
    letters = string.ascii_lowercase
    letters = list(letters)
    
    array = [['' for i in range(5)]for j in range(5)]
    
    keylist = list(key)

    kunique = []
    element = letters

    element.remove("j")
          
    for i in keylist:
        if i in kunique:
            continue
        else:
            kunique.append(i)
            element.remove(i)
    key_length = len(kunique)
    
    row = 0
    col = 0
    for i in kunique:
        array[row][col] = i
        col += 1
        if(row == 5):
            break
        if(col == 5):
            col = 0
            row += 1
    
    # fill remaining alphabets in array
    rem = key_length%5
    quotient = key_length//5
    
    row = quotient   
    col = rem
    
    for i in element:
        if(col == 5):
            col = 0
            row += 1
        if(row == 5):
            break
        array[row][col] = i
        col += 1
    
    # creating pairs of plain text
    plaintext = ""
    i=0
    while i < (len(plain)-1):
        if(plain[i]==plain[i+1]):
            plaintext += plain[i]+"x"
            i+=1
        else:
            plaintext += plain[i]+plain[i+1]
            i+=2
            
    print(plaintext)
    plen = len(plaintext)
    if plen%2 != 0:
        plaintext += "z"

    print(plaintext)
    # print(plain_pai)


# plain = input('Enter plain text: ')
plain = '112234'

plain = plain.lower()
plain = plain.replace(" ","")
plain = plain.replace("j","i")



# key = input('Enter key text: ')
key = 'Jjoker'
key = key.lower()
key = key.replace(" ","")
key = key.replace("j","i")
playfair(plain,key)
