export interface CreatePost {
  blogTitle: string | undefined;
  blogContent: string| undefined;
  blogSummary: string| undefined;
  urlHandle: string| undefined;
  blogImageUrl: string| undefined;
  visible: boolean| undefined;
  blogAuthor: string| undefined;
  publishedDate: string| undefined;
  editedDate: string| undefined;
}
