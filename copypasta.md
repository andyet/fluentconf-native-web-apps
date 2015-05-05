Layout HTML

```
<div>
  <nav className='top-nav top-nav-light cf' role='navigation'>
    <input id='menu-toggle' className='menu-toggle' type='checkbox'/>
    <label htmlFor='menu-toggle'>Menu</label>
    <ul className='list-unstyled list-inline cf'>
      <li>Labelr</li>
      <li><a href='/repos'>Repos</a></li>
      <li className='pull-right'><a href='/logout'>Logout</a></li>
    </ul>
  </nav>
  <div className='container'>
  </div>
</div>
```

GitHub auth

```
'https://github.com/login/oauth/authorize?' + x
```

```
{
  scope: 'user,repo',
  redirect_uri: {something} + '/auth/callback',
  client_id: 'f8dd69187841cdd22a26'
}
```

```
http://labelr-dev.herokuapp.com/authenticate/CODE'
```

Login page:

```
<div className='container'>
  <header role='banner'>
    <h1>Labelr</h1>
  </header>
  <div>
    <p>We label stuff for you, because, we can&trade;</p>
    <a href='/login' className='button button-large'>
      <span className='mega-octicon octicon-mark-github'></span> Login with GitHub
    </a>
  </div>
</div>
```

Styles

```
header
  padding-top: 50px

.label
  height: 40px

  .label-color
    width: 24px
    height: 24px
    border: 1px solid grey
    border-radius: 20px
    display: inline-block

  > span
    margin-left: 10px
    margin-right: 10px

```


Repo Detail

```
<div className='container'>
  <h1></h1>
  <p></p>
  <ul></ul>
</div>
```

Labels

```
<form className='label-form form-inline'>
  <span className='label-color'>&nbsp;</span>
  <div className='form-element'>
    <label htmlFor='name'>name</label>
    <input name='name' className='form-input'/>
  </div>
  <div className='form-element'>
    <label htmlFor='name'>color</label>
    <input name='color' className='form-input'/>
  </div>
  <button type='submit' className='button button'>Save</button>
  <button type='button' className='button button-unstyled'>cancel</button>
</form>
```

```
<div className='label-view'>
  <span className='label-color'>&nbsp;</span>
  <span></span>
  <a href='#'><span className='octicon octicon-pencil'></span></a>
  <a href='#'><span className='octicon octicon-x'></span></a>
</div>
```


Template function

```js
function template (buildData, html) {
  return [
    '<!doctype>',
    '<html>',
      '<head>',
        '<meta charset="utf-8"/>',
        '<link rel="stylesheet" href="/' + buildData.css + '"/>',
      '</head>',
      '<body>',
        html,
      '</body>',
      '<script src="/' + buildData.main + '"></script>',
    '</html>'
  ].join('')
}
```

For instructor

```
"commit": "git add --all && git commit -am \"$(date)\" && npm version minor && git push origin master --tags",
```
