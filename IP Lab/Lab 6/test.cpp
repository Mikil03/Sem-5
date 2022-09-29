#include<bits/stdc++.h>
using namespace std;

int main() {
	// your code goes here
	long long int test,a;
	cin>>test;
	while(test>0)
	{
	    int n,flag=1;
	    cin>>n;
        int o=0,e=0;
	    for(int i=0;i<n;i++)
	    {
	        cin>>a;
            if(a%2==0)
                e++;
            else if(a!=1)
                o++;
            else
                flag=0;
	    }
        if(e<(2*o) || flag==0)
            cout<<e<<endl;
        else
            cout<<2*o<<endl;
	    test--;
	}
	return 0;
}
