import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [ RouterLink ],
  template: `
    <section class="hero">
      <div class="hero-line-1">
        REST API Model Templates
      </div>
      <div class="hero-line-2">
        using .NET 8 & CSLA version 8
      </div>
    </section>
    <section class="features">
      <div class="feature">
        <div class="feature-line-1">
          <img src="/images/csla_win8_mid.png" class="feature-image" alt="">
        </div>
        <h3>CSLA.NET</h3>
        <div class="feature-line-2">
          <a href="https://cslanet.com">CSLA .NET</a> is a software development
          framework that helps you build a reusable, maintainable object-oriented
          business layer for your app.
        </div>
      </div>
      <div class="feature">
        <div class="feature-line-1">
          <img src="/images/model_templates.png" class="feature-image" alt="">
        </div>
        <h3>Model Templates</h3>
        <div class="feature-line-2">
          The model templates shows a way how to use CSLA .NET business objects
          in a REST API web solution.
        </div>
      </div>
      <div class="feature">
        <div class="feature-line-1">
          <img src="/images/code_snippets.png" class="feature-image" alt="">
        </div>
        <h3>Code Snippets</h3>
        <div class="feature-line-2">
          The code snippets provide tools to quickly generate skeletons for
          business objects, data access code and contract definitions.
        </div>
      </div>
    </section>
  `,
  styleUrl: '(home).page.scss',
})
export default class HomePage {}
