package com.ldeng.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ldeng.dao.PhotoDao;
import com.ldeng.model.Photo;
import com.ldeng.model.User;
import com.ldeng.service.PhotoService;

@Service
public class PhotoServiceImpl implements PhotoService {

    @Autowired
    private PhotoDao photoDao;

    public Photo save(Photo photo) {
        return photoDao.save(photo);
    }

    public List<Photo> findAll() {
        return photoDao.findAll();
    }

    public List<Photo> findByUser(User user) {
        return photoDao.findByUser(user);
    }

    public Photo findByPhotoId(Long photoId) {
        return photoDao.findByPhotoId(photoId);
    }
}
