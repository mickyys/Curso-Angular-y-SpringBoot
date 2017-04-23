package com.ldeng.service;

import java.util.List;

import com.ldeng.model.Comment;

public interface CommentService {
	Comment save(Comment comment);

    List<Comment> findByPhotoId (Long photoId);

    Comment findOne(Long commentId);
}
