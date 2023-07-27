import 'dart:html';

import 'package:docs_clone_flutter/constants.dart';
import 'package:docs_clone_flutter/models/user_model.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:google_sign_in/google_sign_in.dart';

final authRepositoryProvider =
    Provider((ref) => AuthRepository(googleSignIn: GoogleSignIn()));

class AuthRepository {
  final GoogleSignIn _googleSignIn;
  final Client _client;
  AuthRepository({
    required GoogleSignIn googleSignIn,
    required Client client,
  }) : _googleSignIn = googleSignIn;
       _client = client;

  void signInWithGoogle() async {
    try {
      final user = await _googleSignIn.signIn();
      if (user != null) {
        final userAcc = UserModel(
          email: user.email,
          name: user.displayName!,
          profilePic: user.photoUrl!,
          uid: '',
          token: '',
        );
        var res = await _client.post(Uri.parse('$host/api/signup'),
           body: userAcc.toJson(),
           header: {
              'Content-Type': 'application/json; charset=UTF-8',

           });

           switch(res.statusCode){
            
           }
      }
    } catch (e) {
      print(e);
    }
  }
}
