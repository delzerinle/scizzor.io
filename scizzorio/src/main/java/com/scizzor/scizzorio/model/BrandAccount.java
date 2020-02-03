package com.scizzor.scizzorio.model;

import com.scizzor.scizzorio.enums.UserRole;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class BrandAccount implements UserAccount {
  private String brandName;
  private String firstName;
  private String lastName;
  private String password;
  private String email;
  private String telephoneNumber;
  private UserRole role;
  
  @Column
  private boolean enabled;
  
  @Id
  private Long id;
  
  public BrandAccount() {
    super();
    this.enabled = false;
  }
}
