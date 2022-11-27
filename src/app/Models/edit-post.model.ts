export interface EditPost {
  BlogTitle: string | undefined;
  BlogContent: string| undefined;
  BlogSummary: string| undefined;
  UrlHandle: string| undefined;
  BlogImageUrl: string| undefined;
  Visible: boolean| undefined;
  BlogAuthor: string| undefined;
  PublishedDate: Date| undefined;
  EditedDate: Date| undefined;
}
