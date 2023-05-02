---
layout: post-layout.html
title: Latest Notes.
---
{% for post in collections.post %}
<p class="courier"><a href="{{ post.url }}">{{ post.data.title }}</a><br><span class="small">{{ post.data.date }}</span></p>
{% endfor %}