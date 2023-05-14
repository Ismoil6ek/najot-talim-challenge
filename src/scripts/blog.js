const lastIndex = BREADCRUMB_CONTENT.length - 1;
const breadcrumb = document.getElementById('breadcrumb');

const breadcrumbItem = (content) =>
  `<li class="breadcrumb__item">${content}</li>`;

const breadcrumbLink = (text, link, index) => `
  <a class="breadcrumb__item-link ${
    index === lastIndex ? 'breadcrumb__item-link--active' : ''
  }" href="./${link}">
    ${text}
  </a>
`;
const breadcrumbArrow = `<img class="breadcrumb__item-arrow" src="../assets/svg/breadcrumb-right-arrow.svg" alt="Not Found" />`;

const breadcrumbItemContent = [];

BREADCRUMB_CONTENT.forEach((e, i) => {
  let content;
  if (i === 0) {
    content = breadcrumbItem(breadcrumbLink(e.text, e.link, i));
    breadcrumbItemContent.push(content);
  } else {
    content = breadcrumbItem(breadcrumbArrow);
    breadcrumbItemContent.push(content);
    content = breadcrumbItem(breadcrumbLink(e.text, e.link, i));
    breadcrumbItemContent.push(content);
  }
});

breadcrumb.innerHTML = breadcrumbItemContent.join('');

/**
 * ---------------------------------------------------------------
 * TABBAR
 * ---------------------------------------------------------------
 **/

let activeTab = 'Barchasi';

const blogFilterList = document.getElementById('blog-filterbar__list');
const blogFilterItem = (text, index) => `
  <li class="blog-filterbar__list-item">
    <button class="blog-filterbar__btn ${
      index === 0 ? 'blog-filterbar__btn--active' : ''
    }">
      ${text}
    </button>
  </li>
`;
blogFilterList.innerHTML = TAB_CONTENT.map(blogFilterItem).join('');

const filterbarButtons = Array(
  ...document.querySelectorAll('.blog-filterbar__btn')
);

filterbarButtons.forEach((e, i) => {
  e.addEventListener('click', () => {
    filterbarButtons.forEach((el) =>
      el.classList.remove('blog-filterbar__btn--active')
    );
    e.classList.add('blog-filterbar__btn--active');
    activeTab = e.innerText;
  });
});

/**
 * ---------------------------------------------------------------
 * BLOG POSTS
 * ---------------------------------------------------------------
 **/

const blogPostsContainer = document.getElementById('blog-posts');
const blogPost = ({ img, name, createdAt, viewCount, title, shortDesc }) => {
  return `
    <div class="blog-posts__card">
      <div
        class="blog-posts__card-head"
        style="background: url('${img}')"
      >
        <span class="blog-posts__card-name">${name}</span>
      </div>

      <div class="blog-posts__card-main">
        <div class="blog-posts__card-info">
          <span class="card-info__text">${createdAt}</span>
          <span class="card-info__text">
            <image class="card-info__icon" src="#" alt="Not Found" />
            ${viewCount}
          </span>
        </div>

        <p class="blog-posts__car-title">
          ${title}
        </p>

        <p class="blog-posts__car-subtitle">
          ${shortDesc}
        </p>
      </div>
    </div>
  `;
};

blogPostsContainer.innerHTML = POSTS.map((e, i) => blogPost(e)).join('');
