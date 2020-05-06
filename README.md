# utools-parse-url-params
> url query 参数解析



## 示例1

url: `http://sina.cn?a=1&b=2`

定界符: `&`

输出:
```JavaScript
{
  a: 1,
  b: 2,
}
```

## 示例2

url: `http://sina.cn?a=1,b=2`

定界符: `,`

输出:
```JavaScript
{
  a: 1,
  b: 2,
}
```

> Tip: 请注意中英字符
