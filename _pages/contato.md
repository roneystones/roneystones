---
layout: default
title: Contato
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate, arcu non tempus tempus, est magna egestas nisi, in fermentum mauris nisl posuere neque. Aenean eu laoreet lorem.
permalink: /contato/
---

<header class="pb5 bb bt b--light-gray">
  <h1 class="f2 f1-m f-subheadline-ns fw5 mt0 mb4 lh-solid">Digital Designer since 2002</h1>
  <h2 class="f6 f4-ns fw1 georgia i">{{ page.description | escape }}</h2>
</header>

<article>
  <div class="cf pv5">
    <div class="fl w-100 w-20-ns">
      <h3 class="f7 silver ttu tracked mb2">Concept</h3>
    </div>
    <div class="fl w-100 w-80-ns">
      <p>Quisque in mattis dolor. Etiam in viverra neque. Etiam ac erat nunc. Vestibulum in dui eu risus condimentum laoreet. Praesent accumsan dictum eros, nec imperdiet nibh venenatis sit amet. In scelerisque sed urna vel pellentesque. Nam nec diam ac est aliquam convallis. Pellentesque dapibus sapien pulvinar est vulputate lacinia. Mauris arcu neque, bibendum vitae efficitur imperdiet, dictum et magna. Curabitur sed ultricies odio.</p>
    </div>
  </div>

  <div class="cf pv5">
    <div class="fl w-100 w-20-ns">
      <h3 class="f7 silver ttu tracked mb2">Skills</h3>
    </div>
    <div class="fl w-100 w-80-ns">
      <div class="fl w-100 w-third-ns">
        <h4 class="f3 fw7 ttu mb3">Data</h4>
        <ul class="list mb4 mb0-ns">
          <li class="bb b--light-gray mb2 pb2">Web Analytics</li>
          <li class="bb b--light-gray mb2 pb2">Testes AB</li>
          <li>Insights from Data</li>
        </ul>
      </div>

      <div class="fl w-100 w-third-ns">
        <h4 class="f3 fw7 ttu mb3">Design</h4>
        <ul class="list mb4 mb0-ns">
          <li class="bb b--light-gray mb2 pb2">Experiência do usuário</li>
          <li class="bb b--light-gray mb2 pb2">Visual Design</li>
          <li>Bla bla bla</li>
        </ul>
      </div>

      <div class="fl w-100 w-third-ns">
        <h4 class="f3 fw7 ttu mb3">Front-end</h4>
        <ul class="list mb4 mb0-ns">
          <li class="bb b--light-gray mb2 pb2">Web Design</li>
          <li class="bb b--light-gray mb2 pb2">Application</li>
          <li>Mobile / Responsive</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="cf pv5">
    <div class="fl w-100 w-20-ns">
      <h3 class="f7 silver ttu tracked mb2">Projetos</h3>
    </div>
    <div class="fl w-100 w-80-ns">
      <div class="fl w-50 w-25-ns">
        <a href="#" class="db aspect-ratio aspect-ratio--1x1 dim">
          <span role="img" aria-label="Beyoncé" style="background-image:url(http://mrmrs.github.io/photos/beyonce.jpg);" class="bg-center cover aspect-ratio--object"></span>
        </a>
      </div>
      <div class="fl w-50 w-25-ns">
        <a href="#" class="db aspect-ratio aspect-ratio--1x1 dim">
          <span role="img" aria-label="Kaytranada" style="background-image:url(http://mrmrs.github.io/photos/kaytranada.jpg);" class="bg-center cover aspect-ratio--object"></span>
        </a>
      </div>
      <div class="fl w-50 w-25-ns">
        <a href="#" class="db aspect-ratio aspect-ratio--1x1 dim">
          <span role="img" aria-label="Woman - Justice" style="background-image:url(http://mrmrs.github.io/photos/justice.jpg);" class="bg-center cover aspect-ratio--object"></span>
        </a>
      </div>
      <div class="fl w-50 w-25-ns">
        <a href="#" class="db aspect-ratio aspect-ratio--1x1 dim">
          <span role="img" aria-label="Skin - Flume" style="background-image:url(http://mrmrs.github.io/photos/flume.jpg);" class="bg-center cover aspect-ratio--object"></span>
        </a>
      </div>
      <div class="fl w-50 w-25-ns">
        <a href="#" class="db aspect-ratio aspect-ratio--1x1 dim">
          <span role="img" aria-label="Beyoncé" style="background-image:url(http://mrmrs.github.io/photos/beyonce.jpg);" class="bg-center cover aspect-ratio--object"></span>
        </a>
      </div>
      <div class="fl w-50 w-25-ns">
        <a href="#" class="db aspect-ratio aspect-ratio--1x1 dim">
          <span role="img" aria-label="Kaytranada" style="background-image:url(http://mrmrs.github.io/photos/kaytranada.jpg);" class="bg-center cover aspect-ratio--object"></span>
        </a>
      </div>
      <div class="fl w-50 w-25-ns">
        <a href="#" class="db aspect-ratio aspect-ratio--1x1 dim">
          <span role="img" aria-label="Woman - Justice" style="background-image:url(http://mrmrs.github.io/photos/justice.jpg);" class="bg-center cover aspect-ratio--object"></span>
        </a>
      </div>
      <div class="fl w-50 w-25-ns">
        <a href="#" class="db aspect-ratio aspect-ratio--1x1 dim">
          <span role="img" aria-label="Skin - Flume" style="background-image:url(http://mrmrs.github.io/photos/flume.jpg);" class="bg-center cover aspect-ratio--object"></span>
        </a>
      </div>
    </div>
  </div>

  <div class="cf pv5">
    <div class="fl w-100 w-20-ns">
      <h3 class="f7 silver ttu tracked mb2">Artigos</h3>
    </div>
    <div class="fl w-100 w-80-ns">
      {% for post in site.posts limit:4 %}
        <div class="db fl w-100 w-50-ns bb b--light-gray pb3 mb3">
          <a class="link near-black hover-dark-pink mb1" href="{{ post.url }}">
            <p class="f4 fw7 mb0">{{ post.title }}</p>
            <p class="f7 silver ttu tracked mb2">{{ post.date | date: "%b %-d, %Y" }}</p>
            <!-- {{ post.excerpt | strip_html | truncatewords: 10 }} -->
            <!-- <a class="fw7 link dark-pink" href="{{ post.url }}">+</a> -->
          </a>
        </div>
      {% endfor %}

      {% for post in site.posts offset:4 limit:2 %}
        <div class="db fl w-100 w-50-ns">
          <a class="link near-black hover-dark-pink mb1" href="{{ post.url }}">
            <p class="f4 fw7 mb0">{{ post.title }}</p>
            <p class="f7 silver ttu tracked mb2">{{ post.date | date: "%b %-d, %Y" }}</p>
            <!-- {{ post.excerpt | strip_html | truncatewords: 10 }} -->
            <!-- <a class="fw7 link dark-pink" href="{{ post.url }}">+</a> -->
          </a>
        </div>
      {% endfor %}
    </div>
  </div>
</article>
