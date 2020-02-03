package com.scizzor.scizzorio.model;

import com.scizzor.scizzorio.enums.UserRole;

public interface UserAccount {
  public String getFirstName();
  public String getLastName();
  public String getPassword();
  public String getEmail();
  public UserRole getRole();
  public String getTelephoneNumber();
  public boolean isEnabled();
  public void setEnabled(boolean enabled);
}
