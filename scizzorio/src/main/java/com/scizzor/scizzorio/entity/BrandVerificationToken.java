package com.scizzor.scizzorio.entity;

import com.scizzor.scizzorio.model.BrandAccount;
import com.scizzor.scizzorio.model.UserAccount;
import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter @Setter @NoArgsConstructor
public class BrandVerificationToken implements VerificationToken {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long Id;
  
  private String token;
  
  @OneToOne(targetEntity = BrandAccount.class, fetch = FetchType.EAGER)
  @JoinColumn(nullable = false, name = "brand_id")
  private BrandAccount brand;
  
  private Date expiryDate;
  
  public BrandVerificationToken(final String token, final UserAccount user) {
    this.token = token;
    this.brand = (BrandAccount) user;
  }
  
  @Override
  public UserAccount getUser() {
    return getBrand();
  }
}
