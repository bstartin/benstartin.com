---
layout: post-layout.html
title: Latest Posts.
---
{% for post in collections.post reversed-%}
<p class="courier"><a href="{{ post.url }}">{{ post.data.title }}</a><br><span class="small">{{ post.data.date }}</span></p>
{% endfor %}