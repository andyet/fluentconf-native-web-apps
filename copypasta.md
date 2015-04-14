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
  scopes: 'user,repo,'
  redirect_uri: {something} + '/auth/callback',
  client_id: '34d32bcd940626d0d6f3'
}
```


<form className='label'>
  <span className='label-color avatar avatar-small avatar-rounded'>&nbsp;</span>
  <input name='name'/>
  <input name='color'/>
  <button type='submit' className='button button-small'>Save</button>
  <button type='button' className='button button-small button-unstyled'>cancel</button>
</form>

<div className='label'>
  <span className='label-color'>&nbsp;</span>
  <span></span>
  <span className='octicon octicon-pencil'></span>
  <span className='octicon octicon-x'></span>
</div>

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