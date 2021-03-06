import React from 'react';
import { useClient } from 'hooks/di';
import { Post } from 'domains/models/post';

export type PostHooks = {
  usePosts(): {
    posts: Post[];
  };
  usePostAction(): {
    createPost: (params: CreatePostParams) => Promise<void>;
  };
};

export type CreatePostParams = {
  name: string;
  description: string | null;
  userId: string;
};

export const PostHooksContext = React.createContext<PostHooks | null>(null);

export const usePosts: PostHooks['usePosts'] = () => {
  const client = useClient(PostHooksContext);

  return client.usePosts();
};

export const usePostAction: PostHooks['usePostAction'] = () => {
  const client = useClient(PostHooksContext);

  return client.usePostAction();
};
