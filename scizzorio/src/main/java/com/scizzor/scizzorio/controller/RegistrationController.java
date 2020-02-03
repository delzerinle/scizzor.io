package com.scizzor.scizzorio.controller;

import com.scizzor.scizzorio.entity.BrandVerificationToken;
import com.scizzor.scizzorio.entity.CustomerVerificationToken;
import com.scizzor.scizzorio.entity.VerificationToken;
import com.scizzor.scizzorio.enums.UserRole;
import com.scizzor.scizzorio.model.UserAccount;
import com.scizzor.scizzorio.service.UserService;
import java.util.Calendar;
import java.util.Locale;
import java.util.Optional;
import javax.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class RegistrationController {
  private UserService userService;
  
  public RegistrationController(final UserService userService) {
    this.userService = userService;
  }
  
  @RequestMapping(value = "/registrationConfirm", method = RequestMethod.GET)
  public String confirmRegistration(
      HttpServletRequest request,
      @RequestParam("token") String token)
  {
    Locale locale = request.getLocale();
    Optional<VerificationToken> verificationTokenOptional = userService.getVerificationToken(token);
    if (verificationTokenOptional.isPresent()) {
      //: TODO add redirect to react app
      return "invalid token";
    }
  
    UserAccount user = verificationTokenOptional.get().getUser();
    Calendar calendar = Calendar.getInstance();
    Long timeLeft = verificationTokenOptional.get().getExpiryDate().getTime()
        - calendar.getTime().getTime();
    if (timeLeft <= 0 ) {
      //: TODO add redirect to react app
      return "token expired";
    }
    
    user.setEnabled(true);
    userService.saveRegisteredUser(user);
    //: TODO add redirect to react app
    return "user is registered";
  }
}
