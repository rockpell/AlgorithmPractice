### 1번
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

### 2번
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
