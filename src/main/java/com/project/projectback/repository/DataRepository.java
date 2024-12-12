package com.project.projectback.repository;

import com.project.projectback.model.Data;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DataRepository extends JpaRepository<Data,Long> {
}
