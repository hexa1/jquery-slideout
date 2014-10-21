A simple jQuery plugin to slide small bits of text in and out.

Useful for sandwiching information inside inline text.

### Usage

**html**

```html
<div>
  Container
  <div class="info">
    <a title="Information to slide out" href="#"><img src=""/>The Trigger</a>
    <p><span>Slide-out info here</span></p>
  </div>
  &nbsp;&nbsp;between text.
</div>
```

**JS**

```js
$('.info').slideOutInfo({});
```

See example.html