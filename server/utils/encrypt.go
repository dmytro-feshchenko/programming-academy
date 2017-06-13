package utils

import "golang.org/x/crypto/scrypt"

var (
	salt = "d^wGw4#@0Qedlbcatv%0xZGVsn!j53XY"
)

//EncryptPassword - generate unique hash from user password
//using AES-256 encryption
func EncryptPassword(password string) (encrypted []byte, err error) {
	dk, err := scrypt.Key([]byte(password), []byte(salt), 16384, 8, 1, 32)
	if err != nil {
		return nil, err
	}
	return dk, nil
}
