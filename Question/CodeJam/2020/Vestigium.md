```c++
#include <iostream>

using namespace std;

int	row_check(int arr[][100], int N, int row)
{
	for (int i = 0; i < N - 1; i++)
	{
		for (int j = i + 1; j < N; j++)
		{
			if (arr[row][i] == arr[row][j])
				return (1);
		}
	}
	return (0);
}

int	col_check(int arr[][100], int N, int col) {
	for (int i = 0; i < N - 1; i++) {
		for (int j = i + 1; j < N; j++) {
			if (arr[i][col] == arr[j][col])
				return (1);
		}
	}
	return (0);
}

int main()
{
	int	T;
	int	N;
	int	arr[100][100];
	int	k;
	int	row_dsum;
	int	col_dsum;

	cin >> T;
	for (int i = 0; i < T; i++)
	{
		cin >> N;
		k = 0;
		row_dsum = 0;
		col_dsum = 0;
		for (int y = 0; y < N; y++)
		{
			for (int x = 0; x < N; x++)
			{
				cin >> arr[y][x];
			}
		}
		for (int p = 0; p < N; p++)
			k += arr[p][p];
		for (int p = 0; p < N; p++)
		{
			row_dsum += row_check(arr, N, p);
			col_dsum += col_check(arr, N, p);
		}
		cout << "Case #" << (i + 1) << ": " <<  k << " " << row_dsum << " " << col_dsum << endl;
	}
	return (0);
}
```
