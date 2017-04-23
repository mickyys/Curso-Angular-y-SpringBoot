package com.ldeng.service;

import java.util.List;

import com.ldeng.model.Photo;
import com.ldeng.model.User;

public interface PhotoService {
	Photo save(Photo photo);

    List<Photo> findAll();

    List<Photo> findByUser(User user);

    Photo findByPhotoId(Long photoId);
}
