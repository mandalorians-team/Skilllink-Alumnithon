package com.example.skilllinkbackend.auth.utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;


import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Component
@RequiredArgsConstructor
public class JwtUtils {

    @Value("${jwt.secret}")
    private String secretKey;

    @Value("${jwt.expiration}")
    private long jwtExpiration;

    @Value("${jwt.refresh-token.expiration}")
    private long refreshExpiration;

    //private final Key secretKey = Keys.secretKeyFor(SignatureAlgorithm.HS512);
    byte[] keyBytes = Keys.secretKeyFor(SignatureAlgorithm.HS512).getEncoded();
    String base64Key = Base64.getEncoder().encodeToString(keyBytes);

    /**
     * Extracts the username from the JWT token.
     *
     * @param token the JWT token
     * @return the username extracted from the token
     */
    public String extractUsername(String token) {
        return  extractClaim(token, Claims::getSubject);
    }

    /**
     * Extracts a specific claim from the JWT token using the provided resolver function.
     *
     * @param token   the JWT token
     * @param resolver a function to resolve the claim from the Claims object
     * @param <T>     the type of the claim to be extracted
     * @return the resolved claim value
     */
    public <T> T extractClaim(String token, Function<Claims, T> resolver) {
        return resolver.apply(extractAllClaims(token));
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parser()
                .setSigningKey(base64Key)
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

    /**
     * Generates a JWT token for the given user details.
     *
     * @param userDetails the user details for which the token is to be generated
     * @return the generated JWT token
     */
    public String generateToken(UserDetails userDetails) {
        return buildToken(new HashMap<>(), userDetails, jwtExpiration);
    }

    /**
     * Generates a refresh token for the given user details.
     *
     * @param userDetails the user details for which the refresh token is to be generated
     * @return the generated refresh token
     */
    public String generateRefreshToken(UserDetails userDetails) {
        return buildToken(new HashMap<>(), userDetails, refreshExpiration);
    }

    private String buildToken(Map<String, Object> extraClaims, UserDetails userDetails, long jwtExpiration) {
        return Jwts.builder()
                .claims(extraClaims)
                .subject(userDetails.getUsername())
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + jwtExpiration))
                .signWith(SignatureAlgorithm.HS512, base64Key)
                .compact();
    }

    /**
     * Validates the JWT token against the provided user details.
     *
     * @param token       the JWT token to validate
     * @param userDetails the user details to validate against
     * @return true if the token is valid, false otherwise
     */
    public boolean isTokenValid(String token, UserDetails userDetails) {
        String username = extractUsername(token);
        return username.equals(userDetails.getUsername()) && !isTokenExpired(token);
    }

    /**
     * Checks if the JWT token is expired.
     *
     * @param token the JWT token to check
     * @return true if the token is expired, false otherwise
     */
    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    /**
     * Extracts the expiration date from the JWT token.
     *
     * @param token the JWT token
     * @return the expiration date extracted from the token
     */
    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

//    private Key getSignInKey() {
//        byte[] keyBytes = Decoders.BASE64.decode(secretKey);
//        return Keys.hmacShaKeyFor(keyBytes);
//    }


}