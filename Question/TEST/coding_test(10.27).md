## 1번
```c++
#include <stdio.h>
#include <string>
#include <iostream>
#include <queue>

using namespace std;

class MedianQueue{
	std::priority_queue<int> smallerQueue;
	std::priority_queue<int, std::vector<int>, std::greater<int>> biggerQueue;
public:
	void push(int value);
	void pop();
	void size();
};

void MedianQueue::push(int value){
	if (smallerQueue.size() == 0) {
		smallerQueue.push(value);
	}
	else if (smallerQueue.top() > value) {
		smallerQueue.push(value);
	}
	else {
		biggerQueue.push(value);
	}

	if(smallerQueue.size() < biggerQueue.size()){
		smallerQueue.push(biggerQueue.top());
		biggerQueue.pop();
	}
	else if (smallerQueue.size() - 1 > biggerQueue.size()) {
		biggerQueue.push(smallerQueue.top());
		smallerQueue.pop();
	}

	cout << smallerQueue.top() << endl;
}

void MedianQueue::pop() {
	
	
	smallerQueue.pop();

	if (smallerQueue.size() < biggerQueue.size()) {
		smallerQueue.push(biggerQueue.top());
		biggerQueue.pop();
	}
	
	if (smallerQueue.size() == 0)
		cout << "NO ITEM" << endl;
	else
		cout << smallerQueue.top() << endl;
}

void MedianQueue::size() {
	 cout << smallerQueue.size() + biggerQueue.size() << endl;
}

int main() {
	int n;
	int value;
	string str;

	MedianQueue medianQueue;

	cin >> n;

	for(int i = 0; i < n; i++){
		cin >> str;
		if(str == "PUSH"){
			cin >> value;
			medianQueue.push(value);
		}
		else if(str == "POP"){
			medianQueue.pop();
		}
		else if(str == "SIZE"){
			medianQueue.size();
		}
	}

	return 0;
}
```

## 2번
```java
import java.util.*;
import java.io.*;
import java.io.IOException;
import java.io.InputStreamReader;

class Main {
    public static int maxX, maxY;

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String input = br.readLine();
        String[] inputs = input.split(" ");

        int x = Integer.parseInt(inputs[1]);
        int y = Integer.parseInt(inputs[0]);

        maxX = x;
        maxY = y;

        int[][] map = new int[y][x];
        boolean[][] visited = new boolean[y][x];

        // S는 출발지: 2
        // F는 도착지: 3
        // X는 장애물: 1
        // O는 빈칸: 0
        int startX = 0, startY = 0;

        for(int i = 0; i < y; i++){
            input = br.readLine();
            for(int p = 0; p < x; p++){
                switch (input.charAt(p)){
                    case 'X':
                        map[i][p] = 1;
                        visited[i][p] = true;
                        break;
                    case 'S':
                        map[i][p] = 2;
                        visited[i][p] = true;
                        startX = p;
                        startY = i;
                        break;
                    case 'F':
                        map[i][p] = 3;
                        break;
                }
            }
        }
        bfs(map, visited, startX, startY);

    }

    public static void bfs(int[][] map, boolean[][] visited, int x, int y){
        Queue<Vertex> queue = new LinkedList<>();

        queue.offer(new Vertex(x, y, 0));

        Vertex vertex;

        while(!queue.isEmpty()){
            vertex = queue.poll();
            visited[vertex.y][vertex.x] = true;

            if(map[vertex.y][vertex.x] == 3){
                System.out.println(vertex.dist);
                return;
            }

            if(vertex.y < maxY - 1 && !visited[vertex.y + 1][vertex.x]){
                queue.offer(new Vertex(vertex.x, vertex.y + 1, vertex.dist + 1));
            }
            if(vertex.y > 0 && !visited[vertex.y - 1][vertex.x]){
                queue.offer(new Vertex(vertex.x, vertex.y - 1, vertex.dist + 1));
            }
            if(vertex.x < maxX - 1 && !visited[vertex.y][vertex.x + 1]){
                queue.offer(new Vertex(vertex.x + 1, vertex.y, vertex.dist + 1));
            }
            if(vertex.x > 0 && !visited[vertex.y][vertex.x - 1]){
                queue.offer(new Vertex(vertex.x - 1, vertex.y, vertex.dist + 1));
            }
        }
    }
}

class Vertex{
    public int x;
    public int y;
    public int dist;
    public Vertex(int x, int y, int dist){
        this.x = x;
        this.y = y;
        this.dist = dist;
    }
}
```

## 3번

오직 C언어로만 푸는 문제

### 입력값
```
3
3
255-128-3
254-128-3
254-128-19
1
0
0
1
3
254-255-255
255-254-255
255-255-254
```

```c
#include<stdio.h>
#include <stdlib.h>

int subStringNum(char* input, int size, int* startIndex) {
	char temp[4];
	int i;
	int index = 0;
	for (i = *startIndex; i < size; i++) {
		if (input[i] == '-')
			break;
		temp[index++] = input[i];
	}
	if (i < size)
		*startIndex = (i + 1);

	return atoi(temp);
}

int countOneBit(int value) {
	int result = 0;

	for (; value != 0; ++result) {
		value &= (value - 1);
	}

	return result;
}

int main() {
	int T = 0;
	int chipCount = 0;
	int chipCharLength;
	int i, j, k;
	int answer = 0;
	char** input = NULL;

	input = (char**)malloc(sizeof(char*) * 3);

	for (i = 0; i < 3; i++) {
		input[i] = (char*)malloc(sizeof(char*) * 2000000);
	}

	scanf_s("%d", &T);

	for (k = 0; k < T; k++) {
		int tempIndex = 0;
		int compareNum1 = 0;
		int compareNum2 = 0;
		int indexs[] = { 0, 0, 0 };
		int values[] = { 0, 0, 0 };
		
		answer = 0;
		scanf_s("%d", &chipCount);
		printf("T:%d , chipCount: %d\n", T, chipCount);

		chipCharLength = sizeof(char) * chipCount * 4;

		for (i = 0; i < 3; i++) {
			scanf_s("%s", input[i], chipCharLength);
		}

		for (i = 0; i < 3; i++) {
			printf("input%d: %s\n", i, input[i]);
		}

		for (i = 0; i < chipCount; i++) {
			for (j = 0; j < 3; j++) {
				values[j] = subStringNum(input[j], chipCharLength, &indexs[j]);
				printf("value: %d\n", values[j]);
			}

			compareNum1 = values[0] ^ values[1];
			compareNum2 = values[2] ^ values[1];
			answer += countOneBit(compareNum1 | compareNum2);
		}

		printf("answer: %d\n", answer);
	}

	for (i = 0; i < 3; i++) {
		free(input[i]);
	}
	free(input);

	return 0;
}
```
