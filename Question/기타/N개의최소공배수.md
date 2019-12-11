# N개의 최소공배수

https://programmers.co.kr/learn/courses/30/lessons/12953

```c++
#include <string>
#include <vector>

using namespace std;

int gcd(int n1, int n2) {
	if (n2 == 0) {
		return n1;
	}
	return gcd(n2, n1 % n2);
}

int solution(vector<int> arr) {
	int answer = 0;
	int lcm = arr[0];

	long long temp;

	for(int i = 1; i < (int)arr.size(); i++)
	{
		temp = (long long)lcm * arr[i];
		lcm = temp / gcd(lcm, arr[i]);
	}
	answer = lcm;

	return answer;
}
```
