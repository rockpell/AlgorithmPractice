# JadenCase 문자열 만들기

https://programmers.co.kr/learn/courses/30/lessons/12951

```java
class Solution {
  public String solution(String s) {
      String answer = "";
      s = s.toLowerCase();
      char[] texts = s.toCharArray();
      boolean isSpace = true;
      
      for(int i = 0; i < texts.length; i++){
          if(texts[i] == ' '){
              isSpace = true;
          }
          else{
              if(isSpace){
                  isSpace = false;
                  if(texts[i] >= 'a' && texts[i] <= 'z'){
                      texts[i] -= 32;
                  }
              }
          }
      }
      
      answer = new String(texts);
      
      return answer;
  }
}
```
