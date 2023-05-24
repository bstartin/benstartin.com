---
layout: content-page.html
title: All Posts
description: heres a list of the lastest posts available on benstartin.com
---
{% for monthPosts in collections.postsByMonth %}
  <h3>{{ monthPosts.monthYear }}</h3>
  {% for post in monthPosts.posts %}
<p class="courier"><a href="{{ post.url }}">{{ post.data.title }}</a><br><span class="small">{{ post.data.date }}</span></p>
    {% endfor %}
{% endfor %}