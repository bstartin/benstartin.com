---
layout: layout.html
title: Welcome to BenStartin.com
description: Hi, welcome to benstartin.com where you can find all the latest informationand posts about ben startin
---
{% assign latest_posts = collections.post | reverse %}
{%- for post in latest_posts limit:5 -%}
<p class="courier"><a href="{{ post.url }}">{{ post.data.title }}</a><br><span class="small">{{ post.data.date }}</span></p>
{%- endfor -%}
