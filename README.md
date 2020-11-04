# S-EAT 
### _S-EAT App_

## 목차
[1. 프로젝트 개요](#프로젝트-개요)   
[2. 개발 리뷰](#개발-리뷰)  
[3. 개발 환경](#개발-환경)  
[4. 개발 파트](#개발-파트)  
[5. Getting Started](#Getting-Started)

## 프로젝트 개요 (2019/9 - 2019/12)
##### fork from : https://github.com/MarcoWilhelm/ubifeed_app
##### [프로젝트 발표 자료](https://github.com/MarcoWilhelm/ubifeed_app/files/5486252/Final_Presentation.pptx)
* 개요  
2019년 2학기 아일랜드 더블린 공과 대학([TUDublin](https://www.tudublin.ie/)), Global Classroom 수업. 여러 나라에서 교환학생으로 온 학생들이 참여해 한 학기동안 작품 개발한다. 우리팀은 총 4인으로 구성. 각각 __한국__, __벨기에__, __이탈리아__, __루마니아__ 의 국적을 가지고 있었다.
* 소개  
스포츠 경기를 관람할 때, 또 다른 재미는 먹거리이다. 하지만, 먹거리를 구매할 때 마다 긴 대기줄에서 기다려야 한다. 이를 해결하기 위해 __Ubifeed__ 를 사용하여 앉은 좌석에서 음식을 주문하고, 경기장의 지정된 구역에서 배달된 음식을 수령한다.

## 개발 리뷰
수강한 **Global Classroom**은 설계방법, 개발방법, 테스트 방법 등 프로젝트 진행의 전반적인 내용을 강의 하고, 교수가 프로젝트의 **Client**로 직접 참여하여 지도한다.  프로젝트의 설계부터 테스트까지 학생들이 진행을 한다. 주 1회 Client와 미팅을 가지고 요구사항을 수립하였다. 팀원들과는 오프라인보다는 온라인 화상으로 미팅을 하고 개발을 진행했다.   
이 당시의 나는 생전 처음으로 진행한 **팀프로젝트**였고, 영어에도 서툴렀다. Git 사용이 다른 팀원들에 비해 굉장히 서툴렀고, 특히 육성으로도 제대로 이해하기 힘든 영어를 화상으로 진행을 하니 어려움은 배가 되었다. 그렇다보니 이 프로젝트에서 나의 기여도는 현저히 낮다. _하지만_, 이 프로젝트를 통해 나는 얻은게 더 많다고 생각한다.      
```
Git 사용법
Client 미팅
화상 미팅
프로젝트 설계   
```
당시, 내 Git에는 '16년도에 개발했던 지뢰찾기가 **저장**되어 있을뿐, 지식이 전무했다. 이 프로젝트를 통해 Git을 공부하게 된 계기가 되었다.    
Client와의 미팅이나 화상 미팅의 경험도 없었다.  Client와의 미팅에서 어떤 대화들이 오가는지, 어떤 요구를 받는지 등을 알게 되었다. 화상 미팅은 오프라인 미팅보다 집중력이 떨어지게 되는데 그 어떤 짓도 하지말고 말을 많이 하며 지속적으로 집중해야 한다는 것을 깨달았다.  
또한, 프로젝트 설계의 중요성과 어떠한 요소들을 진행해야 하는지 알게되었다.
##### [프로젝트 설계 문서](https://github.com/MarcoWilhelm/ubifeed_app/files/5486250/Design_presentation_v1.pptx)
```
요구사항 정의
개발 방법론
클래스 다이어그램
시퀀스 다이어그램
프로토타입
테스트 방법
``` 

## 개발 환경
* Ionic Framework   
    * __Hybrid__(iOS + Android) Mobile Develop Platform
* Java
* MySQL

## 개발 파트
* Mobile    
    * UI    
    * 기능
* Server & Database     
    * https://github.com/byun618/Ubifeed    
        ##### fork from : https://github.com/MarcoWilhelm/Ubifeed
### 내가 진행한 파트
* Mobile UI part

## Getting Started
1. Ionic을 사용하기 위해 기본적으로 **NodeJS**와 **NPM**이 설치되어있어야 한다.
2. ionic 패키지 설치
    ```
    npm install -g ionic
    ```
3. Repository를 clone
    ```
    git clone https://github.com/byun618/ubifeed_app.git
    ```
4. ubifeed 폴더로 이동하여 추가 **Dependency** 설치
    ```
    ubifeed_app/ubifeed_app % npm install
    ```
5. 그 위치에서 App을 실행
    ```
    ionic serve
    ```
6. 앱 내에서 서버와 통신하여 데이터를 얻기 위해서, Java Backend와 MySQL Set up이 필요하다   
        https://github.com/byun618/Ubifeed
    
