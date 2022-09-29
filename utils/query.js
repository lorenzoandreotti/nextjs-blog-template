export const getAllPosts = `*[_type == "post"] | order(publishedAt asc) {
	_id,
  title,
  "slug": slug.current,
  author->{
    name
  },
  body,
  mainImage,
  publishedAt
}`;

export const getAllPostsSlug = `*[_type == "post"] {
		_id,
	  "slug": slug.current
	}`;

export const getPostBySlug = `*[_type == "post" && slug.current == $slug][0]  {
	_id,
	title,
	"slug": slug.current,
	author->{
	  name
	},
	body,
	mainImage,
	publishedAt
	}`;
