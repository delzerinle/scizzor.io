package com.scizzor.scizzorio.entity;

import com.scizzor.scizzorio.model.UserAccount;
import java.sql.Timestamp;
import java.util.Calendar;
import java.util.Date;

public interface VerificationToken {
  public UserAccount getUser();
  public Date getExpiryDate();
  private Date calculateExpiryDate(int expiryTimeInMinutes) {
    Calendar calendar = Calendar.getInstance();
    calendar.setTime(new Timestamp(calendar.getTime().getTime()));
    calendar.add(Calendar.MINUTE, expiryTimeInMinutes);
    return new Date(calendar.getTime().getTime());
  }
}
