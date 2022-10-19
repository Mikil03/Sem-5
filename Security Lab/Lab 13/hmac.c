#include <stdio.h>
#include <windows.h>
#include <wincrypt.h>

int main()
{
    HCRYPTPROV hProv = NULL;
    HCRYPTHASH hHash = NULL;
    HCRYPTKEY hKey = NULL;
    HCRYPTHASH hHmacHash = NULL;
    PBYTE pbHash = NULL;
    DWORD dwDataLen = 0;
    BYTE Data1[] = {0x70, 0x61, 0x73, 0x73, 0x77, 0x6F, 0x72, 0x64};
    BYTE Data2[] = {0x6D, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65};
    HMAC_INFO HmacInfo;

    ZeroMemory(&HmacInfo, sizeof(HmacInfo));
    HmacInfo.HashAlgid = CALG_SHA1;

    if (!CryptAcquireContext(&hProv,NULL,NULL,PROV_RSA_FULL,CRYPT_VERIFYCONTEXT))
    {
        printf(" Error in AcquireContext 0x%08x \n",
               GetLastError());
        goto ErrorExit;
    }

    if (!CryptCreateHash(hProv,CALG_SHA1,0,0,&hHash))
    {
        printf("Error in CryptCreateHash 0x%08x \n",
               GetLastError());
        goto ErrorExit;
    }

    if (!CryptHashData(hHash,Data1,sizeof(Data1),0))
    {
        printf("Error in CryptHashData 0x%08x \n",
               GetLastError());
        goto ErrorExit;
    }

    if (!CryptDeriveKey(hProv,CALG_RC4,hHash,0,&hKey))
    {
        printf("Error in CryptDeriveKey 0x%08x \n",
               GetLastError());
        goto ErrorExit;
    }

    if (!CryptCreateHash(hProv,CALG_HMAC,hKey,0,&hHmacHash))
    {
        printf("Error in CryptCreateHash 0x%08x \n",
               GetLastError());
        goto ErrorExit;
    }

    if (!CryptSetHashParam(hHmacHash,HP_HMAC_INFO,(BYTE *)&HmacInfo,0))
    {
        printf("Error in CryptSetHashParam 0x%08x \n",
               GetLastError());
        goto ErrorExit;
    }

    if (!CryptHashData(hHmacHash,Data2,sizeof(Data2),0))
    {
        printf("Error in CryptHashData 0x%08x \n",
               GetLastError());
        goto ErrorExit;
    }

    if (!CryptGetHashParam(hHmacHash,HP_HASHVAL,NULL,&dwDataLen,
            0))
    {
        printf("Error in CryptGetHashParam 0x%08x \n",
               GetLastError());
        goto ErrorExit;
    }

    pbHash = (BYTE *)malloc(dwDataLen);
    if (NULL == pbHash)
    {
        printf("unable to allocate memory\n");
        goto ErrorExit;
    }

    if (!CryptGetHashParam(hHmacHash,HP_HASHVAL,pbHash,&dwDataLen,0))
    {
        printf("Error in CryptGetHashParam 0x%08x \n", GetLastError());
        goto ErrorExit;
    }

    printf("The hash is:  ");
    for (DWORD i = 0; i < dwDataLen; i++)
    {
        printf("%2.2x ", pbHash[i]);
    }
    printf("\n");

ErrorExit:
    if (hHmacHash)
        CryptDestroyHash(hHmacHash);
    if (hKey)
        CryptDestroyKey(hKey);
    if (hHash)
        CryptDestroyHash(hHash);
    if (hProv)
        CryptReleaseContext(hProv, 0);
    if (pbHash)
        free(pbHash);
    return 0;
}
