# 문제
요구사항에 따른 시나리오 작성 후 유스케이스 다이어그램 그리기

클래스 다이어그램 작성

손코딩(언어 제약 없음)

제한 시간 60분

## 요구사항
1. 학생은 반, 번호, 이름을 가진다.
2. 학생은 국어, 영어, 수학, 과학의 모든 과목에 대한 성적을 가진다.
3. 과목의 점수를 입력 받는다.(모든 과목의 만점은 100점이며 각 과목 선생님이 개별적으로 입력이 가능할 수 있다.)
4. 순위 출력 - 내림차순, 전체 순위(평균 점수), 반 내 순위(평균점수)

### 미완성 코드

```c++
#include <string>
#include <vector>
#include <algorithm>
#include <queue>
#include <iostream>

using namespace std;

class Student
{
private:
	string name;
	int classNum;
	int number;
	
	int language;
	int english;
	int math;
	int science;

	double averageGrade;
public:
	Student(int classNum, int number, string& name)
	{
		this->classNum = classNum;
		this->number = number;
		this->name = name;
	}

	int getClassNum();
	int getNumber();
	string getName();
	void inputAllGrade(int* grades);
	void setLanguageGrade(int value);
	void setEnglishGrade(int value);
	void setMathGrade(int value);
	void setScienceGrade(int value);
	
	int getLanguageGrade();
	int getEnglishGrade();
	int getMathGrade();
	int getScienceGrade();

	double getAverageGrade() const;
	void calAverage();
};

int Student::getClassNum()
{
	return classNum;
}

int Student::getNumber()
{
	return number;
}

string Student::getName()
{
	return name;
}

void Student::inputAllGrade(int* grades)
{
	this->language = grades[0];
	this->english = grades[1];
	this->math = grades[2];
	this->science = grades[3];
}

void Student::setLanguageGrade(int value)
{
	language = value;
}
void Student::setEnglishGrade(int value)
{
	english = value;
}
void Student::setMathGrade(int value)
{
	math = value;
}
void Student::setScienceGrade(int value)
{
	science = value;
}
int Student::getLanguageGrade()
{
	return language;
}
int Student::getEnglishGrade()
{
	return english;
}
int Student::getMathGrade()
{
	return math;
}
int Student::getScienceGrade()
{
	return science;
}

double Student::getAverageGrade() const
{
	return averageGrade;
}

void Student::calAverage()
{
	int sum = language + english + math + science;
	averageGrade = (double)sum / 4;
}

void inputAllGrade(Student& studentData) // 모든 과목 성적 입력
{
	int grade[4];

	cout << "국어, 영어, 수학, 과학 순으로 입력하세요" << endl;

	cin >> grade[0] >> grade[1] >> grade[2] >> grade[3];

	for (int i = 0; i < 4; i++)
	{
		if (grade[i] > 100 || grade[i] < 0)
		{
			cout << "잘못된 성적 입력입니다." << endl;
			return;
		}
	}

	studentData.inputAllGrade(grade);
	studentData.calAverage();
}

void inputIndividualGrade(Student& studentData) // 과목별 성적 입력
{

}

void inputStudentData(vector<Student>& students)
{
	int classNum;
	int number;
	string name;
	Student* studentData;

	cout << "학생의 반, 번호, 이름을 입력하세요" << endl;

	cin >> classNum >> number >> name;

	studentData = new Student(classNum, number, name);

	students.push_back(*studentData);

	delete studentData;
}

void inputGradeData(vector<Student>& students)
{
	int selectIndex = 0;
	int menuIndex = 0;

	cout << "성적을 입력할 학생을 선택하세요" << endl;

	for (int i = 0; i != students.size(); i++)
	{
		cout << i + 1 << ". class: " << students[i].getClassNum() << " , number:  " << students[i].getNumber()
			<< "   name: " << students[i].getName() << endl;
	}

	cin >> selectIndex;

	if (1 <= selectIndex && selectIndex < (int)students.size() + 1)
	{
		cout << "1.전체 과목 성적 입력 \n2.개별 과목 성적 입력" << endl;
		cin >> menuIndex;

		if (menuIndex == 1)
		{
			inputAllGrade(students[selectIndex - 1]);
		}
		else if (menuIndex == 2)
		{
			inputIndividualGrade(students[selectIndex - 1]);
		}
	}
}

bool descendingCompare(Student* n1, Student* n2) // 내림차순
{
	return n1->getAverageGrade() > n2->getAverageGrade();
}

// 순위 출력 - 내림차순, 전체 순위(평균 점수), 반 내 순위(평균점수)
void printRank(vector<Student>& students)
{
	vector<Student*> studentDatas;

	for (auto& item : students)
	{
		studentDatas.push_back(&item);
	}

	sort(studentDatas.begin(), studentDatas.end(), descendingCompare);

	for (int i = 0; i != studentDatas.size(); i++)
	{
		cout << i + 1 << "등: " << studentDatas[i]->getName() << " , 점수: " << studentDatas[i]->getAverageGrade() << "\n" << endl;
	}
}

int main()
{
	vector<Student> students;
	int menuIndex = 0;

	while (true)
	{
		cout << "1.학생 정보 입력 \n2.학생 성적 입력 \n3.순위 출력 \n4.종료" << endl;

		cin >> menuIndex;

		switch (menuIndex)
		{
		case 1:
			inputStudentData(students);
			break;
		case 2:
			inputGradeData(students);
			break;
		case 3:
			printRank(students);
			break;
		case 4:
			return 0;
			break;
		}
	}
}
```
