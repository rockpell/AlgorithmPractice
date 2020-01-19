# EOF 처리

https://www.acmicpc.net/problem/10951

```c
#include<stdio.h>

int main()
{
	int n1;
	int n2;
	
	while(scanf("%d", &n1) != EOF)
	{
		scanf("%d", &n2);
		
		printf("%d\n", n1 + n2);
	}

	return 0;
}
```
