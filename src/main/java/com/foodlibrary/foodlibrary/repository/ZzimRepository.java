package com.foodlibrary.foodlibrary.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.foodlibrary.foodlibrary.entity.Zzim;
import org.springframework.data.jpa.repository.Query;

public interface ZzimRepository extends JpaRepository<Zzim, Integer> {
    Zzim findByPrdlstreportnoAndNickname(String prdlstreportno, String nickname);

    int countByPrdlstreportno(String prdlstreportno);
}