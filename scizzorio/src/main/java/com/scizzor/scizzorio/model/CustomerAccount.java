package com.scizzor.scizzorio.model;

import com.scizzor.scizzorio.enums.Gender;
import com.scizzor.scizzorio.enums.UserRole;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class CustomerAccount implements UserAccount {
  private String firstName;
  private String lastName;
  private String password;
  private String email;
  private String telephoneNumber;
  private Gender gender;
  private UserRole role;
  
  @Column
  private boolean enabled;
  
  @Id
  private Long Id;
  
  public CustomerAccount() {
    super();
    this.enabled = false;
  }
}
