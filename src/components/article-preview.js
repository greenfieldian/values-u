import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import './article-preview.css'

export default ({ article }) => (

  <article >
      <div>
          <div>
          <Link to={`/blog/${article.slug}`}>
          <Img
              className=""
              alt={article.title}
              fluid={article.heroImage.fluid}
            />
            </Link>
          </div>
          <h3 className="article-header">
            <Link to={`/blog/${article.slug}`}>{article.title}</Link>
          </h3>
          <div>
              <p className="article-desc">{article.description.description}</p>
          </div>
          <div className="article-author">
              <Link><p>{article.author.name}</p></Link>
          </div>
      </div>
  </article>

)
