---
layout: default
title: Diário
description: Anotações pessoais úteis para quem pula direto para o TL;DR
permalink: /diario/
---

<header class="mb5">
  <h1 class="f1">{{ page.description | escape }}</h1>
</header>

<section class="mb5">
  <ul>
    {% for post in site.posts %}
    <li>
      <a class="link i blue hover-dark-pink flex items-baseline mb4" href="{{ post.url | relative_url }}">
        <span class="f7 mr4 mono tracked light-silver">{{ post.date | date: "%d %m %Y" }}</span>
        <span class="f3">{{ post.title }}</span>
      </a>
    </li>
    {% endfor %}
  </ul>
</section>