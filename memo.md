[Github REST API 사용하기](https://shanepark.tistory.com/146)

[github api 사용방법](https://taetaetae.github.io/2017/03/02/github-api/)

[포스트맨(Postman) 사용법과 API 실행해 보기](https://binit.tistory.com/17)

[Github API 다루기](https://velog.io/@kusdsuna/Github-API-%EB%8B%A4%EB%A3%A8%EA%B8%B0)


1. repositories 검색
```
https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}

ex)
https://api.github.com/search/repositories?q=til
```

2. `1` 등록 (localstorage)
3. `2` 삭제
4. `2` 의 `issue` 모아보기
```
https://api.github.com/repos/michalsnik/aos/issues
```