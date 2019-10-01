# OX퀴즈

https://www.acmicpc.net/problem/8958

```java
import java.util.*;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String args[]) throws Exception {
        InputStreamReader reader = new InputStreamReader(System.in);
        BufferedReader bufReader = new BufferedReader(reader);

        int T = Integer.parseInt(bufReader.readLine());

        for(int i = 0; i < T; i ++){
            char[] input = bufReader.readLine().toCharArray();
            int count = 0;
            int totalCount = 0;
            for(int p = 0; p < input.length; p++){
                if(input[p] == 'O'){
                    ++count;
                }
                else{
                    count = 0;
                }
                totalCount += count;
            }
            System.out.println(totalCount);
        }
    }
}
```
