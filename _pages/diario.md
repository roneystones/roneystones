---
layout: page
title: Diário
description: Anotações úteis para quem pula direto para o TL;DR
permalink: /diario/
weight: 2
---

<header class="mb5">
  <h1 class="f1 fw4">{{ page.description | escape }}</h1>
</header>

<section class="mb5">
  <ul class="list pl0">
    {% for post in site.posts %}
    <li>
      <a class="link dim i blue flex items-baseline mb4" href="{{ post.url | relative_url }}">
        <span class="f7 mr4 mono tracked light-silver">{{ post.date | date: "%d %m %Y" }}</span>
        <span class="f3">{{ post.title }}</span>
      </a>
    </li>
    {% endfor %}
  </ul>
</section>