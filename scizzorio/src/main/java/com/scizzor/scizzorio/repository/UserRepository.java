package com.scizzor.scizzorio.repository;

import com.scizzor.scizzorio.model.UserAccount;
import java.util.Optional;
import org.springframework.stereotype.Component;

@Component
public class UserRepository {
  public UserRepository() {}
  
  public Optional<UserAccount> findByEmail(String email) {
    return Optional.empty();
  }
  public Optional<UserAccount> save(UserAccount user) { return Optional.empty(); }
}
