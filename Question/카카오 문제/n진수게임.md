# n진수 게임

https://programmers.co.kr/learn/courses/30/lessons/17687?language=cpp

```c++
#include <string>
#include <vector>

using namespace std;

int calSize(int n, int number)
{
	int i = 0;

	while (number != 0) {
		++i;
		number /= n;
	}

	return i;
}

string changeBaseNum(int n, int number)
{
	string result = "";
	int size = calSize(n, number);

	for(int i = 0; i < size; i++) // 자리수 만들기
	{
		result += '0';
	}
	
	int index = result.size() - 1;

	if(number == 0)
	{
		result += '0';
	}

	while(number != 0)
	{
		int temp = number % n;
		if(temp > 9)
		{
			result[index--] = 'A' + (temp - 10);
		}
		else
		{
			result[index--] = '0' + temp;
		}
		
		number /= n;
	}

	return result;
}

string solution(int n, int t, int m, int p) {
	string answer = "";
	string allString = "";

	for(int i = 0; (int)allString.size() < t * m; ++i)
	{
		allString += changeBaseNum(n, i);
	}

	for(int i = 0; i < t * m; ++i)
	{
		if(i % m == (p - 1))
		{
			answer += allString[i];
		}
	}

	return answer;
}
```
