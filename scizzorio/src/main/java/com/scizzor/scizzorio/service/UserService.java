package com.scizzor.scizzorio.service;

import com.scizzor.scizzorio.entity.VerificationToken;
import com.scizzor.scizzorio.exceptions.EmailExistsException;
import com.scizzor.scizzorio.model.UserAccount;
import com.scizzor.scizzorio.model.dto.UserAccountDto;
import java.util.Optional;

public interface UserService {
  Optional<UserAccount> registerNewUserAccount(UserAccountDto userAccountDto)
      throws EmailExistsException;
  UserAccount getUser(String verificationToken);
  void saveRegisteredUser(UserAccount user);
  void createVerificationToken(UserAccount user, String token);
  Optional<VerificationToken> getVerificationToken(String verificationToken);
}
