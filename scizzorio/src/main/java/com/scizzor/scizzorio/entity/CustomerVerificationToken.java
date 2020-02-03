package com.scizzor.scizzorio.entity;

import com.scizzor.scizzorio.model.CustomerAccount;
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
public class CustomerVerificationToken implements VerificationToken {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;
  
  private String token;
  
  @OneToOne(targetEntity = CustomerAccount.class, fetch = FetchType.EAGER)
  @JoinColumn(nullable = false, name = "customer_id")
  private CustomerAccount customer;
  
  private Date expiryDate;
  
  public CustomerVerificationToken(final String token, final UserAccount user) {
    this.token = token;
    this.customer = (CustomerAccount) user;
  }
  
  @Override
  public UserAccount getUser() {
    return getCustomer();
  }
}
