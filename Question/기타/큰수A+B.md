# 큰 수 A+B

https://www.acmicpc.net/problem/10757

```c
#include <stdio.h>
#include <stdlib.h>

int	ft_strlen(char *str)
{
	int	size;
	
	size = 0;
	while (str[size])
		++size;
	return (size);
}

char	*rev_str(char *str)
{
	int	size;
	int	i;
	char	temp;

	i = 0;
	size = ft_strlen(str);
	while (i < size / 2)
	{
		temp = str[i];
		str[i] = str[size - 1 - i];
		str[size - 1 - i] = temp;
		i++;
	}
	return (str);
}

char	plus(char ch1, char ch2, int *out_carry)
{
	char	result;

	if (*out_carry == 1)
		ch1 += 1;
	*out_carry = 0;
	result = ch1 + (ch2 - '0');
	if (result > '9')
	{
		result -= ('9' - '0' + 1);
		*out_carry = 1;
	}
	return (result);
}

char	*cal(char *result, char *str1, char *str2)
{
	int	i;
	int	carry;

	i = 0;
	carry = 0;
	str1 = rev_str(str1);
	str2 = rev_str(str2);
	while (str1[i] && str2[i])
	{
		result[i] = plus(str1[i], str2[i], &carry);
		i++;
	}
	while (str1[i])
	{
		result[i] = plus(str1[i], '0', &carry);
		i++;
	}
	while (str2[i])
	{
		result[i] = plus(str2[i], '0', &carry);
		i++;
	}
	if (carry == 1)
		result[i++] = '1';
	result[i] = 0;
	result = rev_str(result);
	return (result);
}

int	main()
{
	char	*n1;
	char	*n2;
	char	*result;

	n1 = (char *)malloc(sizeof(char) * 10002);
	n2 = (char *)malloc(sizeof(char) * 10002);
	result = (char *)malloc(sizeof(char) * 10003);
	scanf("%s %s", n1, n2);
	result = cal(result, n1, n2);
	printf("%s", result);
	return (0);
}
```
