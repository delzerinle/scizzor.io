package com.scizzor.scizzorio.service;

import static com.scizzor.scizzorio.enums.UserRole.BRAND;
import static com.scizzor.scizzorio.enums.UserRole.CUSTOMER;

import com.scizzor.scizzorio.entity.BrandVerificationToken;
import com.scizzor.scizzorio.entity.CustomerVerificationToken;
import com.scizzor.scizzorio.entity.VerificationToken;
import com.scizzor.scizzorio.exceptions.EmailExistsException;
import com.scizzor.scizzorio.model.BrandAccount;
import com.scizzor.scizzorio.model.dto.BrandAccountDto;
import com.scizzor.scizzorio.model.CustomerAccount;
import com.scizzor.scizzorio.model.dto.CustomerAccountDto;
import com.scizzor.scizzorio.model.UserAccount;
import com.scizzor.scizzorio.model.dto.UserAccountDto;
import com.scizzor.scizzorio.enums.UserRole;
import com.scizzor.scizzorio.repository.TokenRepository;
import com.scizzor.scizzorio.repository.UserRepository;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class UserServiceImpl implements UserService {
  private UserRepository userRepository;
  private TokenRepository tokenRepository;
  
  @Autowired
  public UserServiceImpl(
      final UserRepository userRepository,
      final TokenRepository tokenRepository
  ) {
    this.userRepository = userRepository;
    this.tokenRepository = tokenRepository;
  }
  
  @Override
  public Optional<UserAccount> registerNewUserAccount(UserAccountDto userAccountDto) throws EmailExistsException {
    String email = userAccountDto.getEmail();
    if (emailExists(email)) {
      throw new EmailExistsException(
          String.format("An account exists with this email address: %s", email));
    }
    Optional<UserAccount> userAccount = Optional.empty();
    UserRole userRole = userAccountDto.getRole();
    if (userRole.equals(BRAND)) {
      userAccount = Optional.of(createNewBrandAccount(userAccountDto));
    }
    if(userRole.equals(CUSTOMER)) {
      userAccount = Optional.of(createNewCustomerAccount(userAccountDto));
    }
    return userAccount.isEmpty() ? userAccount : userRepository.save(userAccount.get());
  }
  
  @Override
  public UserAccount getUser(String verificationToken) {
    return tokenRepository.findByToken(verificationToken).getUser();
  }
  
  @Override
  public void saveRegisteredUser(UserAccount user) {
    userRepository.save(user);
  }
  
  @Override
  public void createVerificationToken(UserAccount user, String token) {
    Optional<VerificationToken> verificationToken = Optional.empty();
    switch(user.getRole()) {
      case BRAND:
        verificationToken = Optional.of(new BrandVerificationToken(token, user));
        break;
      case CUSTOMER:
        verificationToken = Optional.of(new CustomerVerificationToken(token, user));
        break;
    }
    verificationToken.ifPresent(aToken -> tokenRepository.save(aToken));
  }
  
  @Override
  public Optional<VerificationToken> getVerificationToken(String verificationToken) {
    return Optional.of(tokenRepository.findByToken(verificationToken));
  }
  
  private boolean emailExists(String email) {
    Optional<UserAccount> userAccount = userRepository.findByEmail(email);
    return userAccount.isPresent();
  }
  
  private CustomerAccount createNewCustomerAccount(UserAccountDto userAccountDto) {
    CustomerAccount customerAccount = new CustomerAccount();
    CustomerAccountDto customerAccountDto = (CustomerAccountDto) userAccountDto;
    customerAccount.setFirstName(customerAccountDto.getFirstName());
    customerAccount.setLastName(customerAccountDto.getLastName());
    customerAccount.setEmail(customerAccountDto.getEmail());
    customerAccount.setPassword(customerAccountDto.getPassword());
    customerAccount.setTelephoneNumber(customerAccountDto.getTelephoneNumber());
    customerAccount.setGender(customerAccountDto.getGender());
    customerAccount.setRole(customerAccountDto.getRole());
    return customerAccount;
  }
  
  private BrandAccount createNewBrandAccount(UserAccountDto userAccountDto) {
    BrandAccount brandAccount = new BrandAccount();
    BrandAccountDto brandAccountDto = (BrandAccountDto) userAccountDto;
    brandAccount.setBrandName(brandAccountDto.getBrandName());
    brandAccount.setFirstName(brandAccountDto.getFirstName());
    brandAccount.setLastName(brandAccountDto.getLastName());
    brandAccount.setEmail(brandAccountDto.getEmail());
    brandAccount.setPassword(brandAccountDto.getPassword());
    brandAccount.setTelephoneNumber(brandAccountDto.getTelephoneNumber());
    brandAccount.setRole(userAccountDto.getRole());
    return brandAccount;
  }
  
}
